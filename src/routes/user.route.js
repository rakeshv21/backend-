import { Router} from "express";
import {registeruser} from "../controllers/user.controllers.js"
 
import {upload} from "../middlewares/multer.middleware.js"

const router = router();

router.route("/register").post(
    //ye upload this is one of the middleware it will always write in this way before execututing another function
    upload.fields([
    {
        name: "avatar",
        maxCount :1
    },
    {
          name: "coverImage",
          maxCount:1
    }
    ]),
    registeruser)

export default router