import express  from "express";
import{
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deteleUser
} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deteleUser);

export default router;