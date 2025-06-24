import styles from "./FacilityManagers.module.scss"
import type { FacilityManagerFormInput, FacilityManagers, FacilityManagerState } from "./FacilityManagers.types.ts"
import editImg from '../../../assets/edit.png';
import delImg from '../../../assets/delete.png';
import manager from '../../../assets/manager.png';
import { useReducer } from "react";
import Button from "../../../Components/Button/Button.tsx";
import Search from "../../../Components/Search/Search.tsx";
import Pagination from "../../../Components/Pagination/Pagination.tsx";
import Modal from "../../../Components/Modal/Modal.tsx";
import Input from "../../../Components/Input/Input.tsx";
import FacilityManagersService from "../../../Services/OwnerServices/FacilityManagers.service.ts";
import { facilityManagerReducer } from "./FacilityManagers.reducer.ts";
import { useForm } from "react-hook-form";


const FacilityManagers = () => {

    const initialState: FacilityManagerState = {
        facilityMan:[],
        addModal: false,
        editModal: false,
        delModal: false,
        currentManagerId:null
    }

    

    const [state, dispatch] = useReducer(facilityManagerReducer, initialState)

    const {facilityMan}=state;

    

    // const [facilityMan, setFacilityMan] = useState<FacilityManagers[]>([]);

    // const [addModal, setAddModal] = useState(false);
    // const [editModal, setEditModal] = useState(false);
    // const [delModal, setDelModal] = useState(false);


    const displayFacilityManagers = async () => {
        try {
            const facilityManagersList = await FacilityManagersService.getFacilityManagers();
            dispatch({ type: 'DISPLAY FACILITY MANAGER', data: facilityManagersList })
            // setFacilityMan(facilityManagersList);

        } catch (e) {
            console.log(e);
        }
    }

    const newFacilityManager = async (data: FacilityManagers) => {
        try {
            const newFacilityManager = await FacilityManagersService.addFacilityManagers(data);
            dispatch({ type: 'ADD FACILITY MANAGER', data: newFacilityManager })
            // setFacilityMan([...facilityMan, newFacilityManagerList])

            dispatch({ type: 'ADD MODAL' })
            // setAddModal(false)
        } catch (e) {
            throw { message: e }
        }
    }

    const updateFacilityManager = async (id: number, data: FacilityManagers) => {
        try {
            const updatedFacilityManagers = await FacilityManagersService.editFacilityManagers(id, data);
            dispatch({ type: 'EDIT FACILITY MANAGER', data: updatedFacilityManagers })
            // setFacilityMan([...facilityMan])

            dispatch({ type: 'EDIT MODAL' })
        } catch (e) {
            throw { message: e }
        }
    }

    const removeFacilityManager = async (id: number) => {
        try {
            const changedFacilityManagers = await FacilityManagersService.deleteFacilityManagers(id);
            dispatch({ type: 'DELETE FACILITY MANAGER', data: changedFacilityManagers })

            dispatch({ type: 'DELETE MODAL' })

        } catch (e) {
            throw { message: e }
        }
    }
    // useEffect(() => {
    //     displayFacilityManagers()
    // })
    const { register, handleSubmit, formState } = useForm<FacilityManagerFormInput>();

    return (

        <div className={styles.FacilityManagerPage}>

            <div className={styles.Operations}>
                <Search />
                
                {/* ye mere add ka form hai*/}
                <Modal title={"Add Facility Manager"} isOpen={state.addModal} onClose={() => dispatch({ type: 'ADD MODAL' })}>

                    <form className={styles.Form} onSubmit={handleSubmit((data)=>newFacilityManager(data))}>
                        <Input type="text" placeholder="Name" {...register("name")} />
                        {formState.errors.name && <small className={styles.validation}>{formState.errors.name.message}</small>}

                        <Input type="email" placeholder="Email" {...register("email")} />
                        {formState.errors.email && <small className={styles.validation}>{formState.errors.email.message}</small>}

                        <Button typeof="submit">Confirm</Button>
                    </form>
                </Modal>

                <Button onClick={() => dispatch({ type: 'ADD MODAL' })}>ADD</Button>
            </div>

            <div className={styles.FacilityManagerCardContainer}>
                {facilityMan.map((person:any) => (
                    <div className={styles.FacilityManagerCardContent} key={person.id}>

                        <div className={styles.Images}>

                            <img src={editImg} onClick={() => dispatch({ type: 'EDIT MODAL' })} />
                            <img src={delImg} alt="" onClick={() => dispatch({ type: 'DELETE MODAL' })} />

                        </div>

                        <img src={manager} alt="" />
                        <h2>{`Name: ${person.name} `}</h2>
                        <h3>{`Email: ${person.email}`}</h3>
                        <p>{`Facility Name: ${person.facilityName}`}</p>
                        <p>{`Facility Address: ${person.facilityAddress}`}</p>
                    </div>

                ))}
            </div>
            <Pagination />

            {/* Ye mere edit ka form hai!!!!*/}
            <Modal title="Edit Facility Manager" isOpen={state.editModal} onClose={() => dispatch({ type: 'EDIT MODAL' })}>
                <form className={styles.Form} onSubmit={handleSubmit((data)=>updateFacilityManager(data))}>
                    <Input type="text" placeholder="Name" {...register("name")}/>
                    {formState.errors.name && <small className={styles.validation}>{formState.errors.name.message}</small>}

                    <Input type="email" placeholder="Email" {...register("email")}/>
                    {formState.errors.email && <small className={styles.validation}>{formState.errors.email.message}</small>}
                    <Button typeof="submit"></Button>
                </form>
            </Modal>

            {/* Ye mere delete ka */}
            <Modal title="Delete Facility Manager" isOpen={state.delModal} onClose={() => dispatch({ type: 'DELETE MODAL' })}>
                <h3>Are you sure???</h3>

                    <Button onClick={(id) => removeFacilityManager(id)}>YES</Button>
             
            </Modal>
        </div>
    );
};

export default FacilityManagers 
