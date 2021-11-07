const router = require("express").Router();
const authController = require("../controllers/auth");
const validationMiddleware = require("../middleware/validationMiddleware");
const { check } = require("express-validator");

router.post(
  "/login",
  [
    check("email")
      .isEmail()
      .withMessage("Must be correctly formatted e-mail")
  ],
  validationMiddleware,
  authController.login
);

router.post(
  "/signup",
  [
    check("firstName")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("lastName")
      .trim()
      .exists()
      .matches(/^[A-ZÕÄÖÜa-zõäöü]+$/)
      .withMessage("Must be alphabetic"),
    check("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Must be correctly formatted e-mail"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Must be at least 6 characters long"),
  ],
  validationMiddleware,
  authController.signup
);

module.exports = router;
