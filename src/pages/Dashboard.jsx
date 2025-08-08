// 1. Importaciones (sin cambios)
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { authFirebase, dbFirebase } from '../firebase';
import { signOut } from 'firebase/auth';
import { getDocs, collection, query, where, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Dashboard.css';

// 2. Componente de confirmación con la lógica MEJORADA
const ConfirmToast = ({ closeToast, onConfirm }) => (
  <div>
    <p>¿Estás seguro de que quieres eliminar este tour?</p>
    <div className="toast-buttons">
      {/* 
        CAMBIO CLAVE: Al hacer clic, primero se ejecuta la confirmación 
        y LUEGO se cierra este mismo toast para que no se quede en pantalla.
      */}
      <button 
        className="toast-btn toast-btn--confirm" 
        onClick={() => { 
          onConfirm(); 
          closeToast(); 
        }}
      >
        Sí, eliminar
      </button>
      <button className="toast-btn toast-btn--cancel" onClick={closeToast}>
        Cancelar
      </button>
    </div>
  </div>
);


const Dashboard = () => {
    // El resto de la lógica del componente (useState, useEffect, etc.) permanece igual...
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [id, setId] = useState("");
    const [tours, setTours] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleGetTours = async () => {
        try {
            const currentUser = authFirebase.currentUser;
            if (!currentUser) return;
            const q = query(collection(dbFirebase, "tours"), where("uid", "==", currentUser.uid));
            const querySnapshot = await getDocs(q);
            const toursData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setTours(toursData);
        } catch (error) {
            console.error("Error al obtener los tours:", error);
            toast.error("No se pudieron cargar los tours.");
        }
    };

    useEffect(() => {
        if (user) {
            handleGetTours();
        }
    }, [user]);

    useEffect(() => {
        const currentUser = authFirebase.currentUser;
        if (currentUser) {
            setUser(currentUser);
        } else {
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(authFirebase);
            navigate('/');
        } catch (error) {
            console.error("Error al cerrar sesión:", error);
            toast.error("Error al cerrar sesión.");
        }
    };

    const handleEdit = (tour) => {
        setId(tour.id);
        reset({
            nombre: tour.nombre,
            imagen: tour.imagen,
            precio: tour.precio,
            descripcion: tour.descripcion
        });
        toast.info(`Editando el tour: ${tour.nombre}`);
    };

    const handleCreateTour = async (data) => {
        try {
            if (!user) return;
            if (id) {
                await updateDoc(doc(dbFirebase, "tours", id), data);
                toast.success("¡Tour actualizado correctamente!");
            } else {
                await addDoc(collection(dbFirebase, "tours"), { ...data, uid: user.uid });
                toast.success("¡Tour creado con éxito!");
            }
            setId("");
            reset({ nombre: '', imagen: '', precio: '', descripcion: '' });
            handleGetTours();
        } catch (error) {
            console.error(error);
            toast.error("Hubo un error al guardar el tour.");
        }
    };

    const handleDelete = async (idToDelete) => {
        try {
            await deleteDoc(doc(dbFirebase, "tours", idToDelete));
            toast.success("Tour eliminado correctamente.");
            handleGetTours();
        } catch (error) {
            console.error("Error al eliminar:", error);
            toast.error("No se pudo eliminar el tour.");
        }
    };

    const handleDeleteConfirmation = (idToDelete) => {
      // La llamada al toast no cambia
      toast.warn(<ConfirmToast onConfirm={() => handleDelete(idToDelete)} />, {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        closeButton: true,
      });
    };

    return (
        <div className="dashboard">
            <ToastContainer
                position="top-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <header className="dashboard__header">
              {/* ... */}
                <p className="dashboard__welcome">
                    Bienvenid@ <span>{user ? user.email : 'Usuario'}</span>
                </p>
                <div className="dashboard__actions">
                    <button onClick={handleLogout} className="dashboard__logout-btn">
                        Salir
                    </button>
                </div>
            </header>

            <main className="dashboard__content">
              {/* ... El resto de tu JSX no necesita cambios ... */}
                <section className="dashboard__card">
                    <h4 className="dashboard__card-title">{id ? 'Editar Tour' : 'Crear Nuevo Tour'}</h4>
                    <p className="dashboard__card-subtitle">Usa este módulo para añadir o modificar tours.</p>
                    
                    <form className="dashboard-form" onSubmit={handleSubmit(handleCreateTour)}>
                        <div className="campo">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" placeholder="Nombre del tour" {...register("nombre", { required: "El nombre es obligatorio" })} />
                            {errors.nombre && <span className="errors">{errors.nombre.message}</span>}
                        </div>
                        
                        <div className="campo">
                            <label htmlFor="imagen">URL de Imagen:</label>
                            <input type="url" id="imagen" placeholder="https://ejemplo.com/imagen.jpg" {...register("imagen", { required: "La URL de la imagen es obligatoria" })} />
                            {errors.imagen && <span className="errors">{errors.imagen.message}</span>}
                        </div>
                        
                        <div className="campo">
                            <label htmlFor="precio">Precio:</label>
                            <input type="number" step="0.01" id="precio" placeholder="199.99" {...register("precio", { required: "El precio es obligatorio", valueAsNumber: true })} />
                            {errors.precio && <span className="errors">{errors.precio.message}</span>}
                        </div>

                        <div className="campo">
                            <label htmlFor="descripcion">Descripción:</label>
                            <textarea id="descripcion" placeholder="Describe los detalles del tour" {...register("descripcion", { required: "La descripción es obligatoria" })} />
                            {errors.descripcion && <span className="errors">{errors.descripcion.message}</span>}
                        </div>

                        <input className="btn" type="submit" value={id ? "Actualizar Tour" : "Guardar Tour"} />
                    </form>
                </section>

                <section className="dashboard__card">
                    <h4 className="dashboard__card-title">Mis Tours</h4>
                    <p className="dashboard__card-subtitle">Aquí verás todos los tours que has creado.</p>

                    <div className="dashboard__tours-list">
                        {tours.length === 0 ? (
                            <div className="dashboard__no-data">Aún no existen registros...</div>
                        ) : (
                            tours.map((tour) => (
                                <div className="dashboard__tour-card" key={tour.id}>
                                    <img src={tour.imagen} alt={tour.nombre} className="dashboard__tour-img" />
                                    <div className="dashboard__tour-info">
                                        <h5>{tour.nombre}</h5>
                                        <p className="tour-price">${tour.precio}</p>
                                        <p>{tour.descripcion}</p>
                                    </div>
                                    <div className="dashboard__tour-actions">
                                        <button className="dashboard__tour-btn dashboard__tour-btn--update" onClick={() => {handleEdit(tour)}}>Editar</button>
                                        <button className="dashboard__tour-btn dashboard__tour-btn--delete" onClick={() => {handleDeleteConfirmation(tour.id)}}>Borrar</button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Dashboard;