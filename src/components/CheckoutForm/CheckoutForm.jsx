import "./checkoutForm.scss";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setCartItems } from "../../redux/slices/cartItemsSlice";
import { useLayout } from "../../context/LayoutContext";

export function CheckoutForm() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();

  const isListlayout = useLayout();
  const formClasses = isListlayout
    ? "border rounded p-4 d-flex flex-column mt-3 w-100"
    : "border rounded p-4 d-flex flex-column mt-3 w-50";

  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      age: "",
      adress: "",
      phoneNumber: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("This field is required"),
      lastName: Yup.string().required("This field is required"),
      age: Yup.number()
        .positive("Age cannot be negative")
        .required("This field is required")
        .typeError("Age must be a number"),
      adress: Yup.mixed().required("This field is required"),
      phoneNumber: Yup.number().required("This field is required").typeError("Please enter a valid phone number"),
    }),
    onSubmit: (values) => {
      dispatch(setCartItems([]));
      console.log({
        items: cartItems,
        clientInformation: values,
      });
    },
  });
  return (
    <form
      className={formClasses}
      style={{ minWidth: "250px", position: "sticky", top: "80px" }}
      onSubmit={formik.handleSubmit}
    >
      <label htmlFor="">Checkout information:</label>
      <div className="pb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Name"
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.name && formik.touched.name ? (
          <label htmlFor="name" className="form-error">
            {formik.errors.name}
          </label>
        ) : null}
      </div>
      <div className="pb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={formik.values.lastName}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.lastName && formik.touched.lastName ? (
          <label htmlFor="lastName" className="form-error">
            {formik.errors.lastName}
          </label>
        ) : null}
      </div>
      <div className="pb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Age"
          name="age"
          value={formik.values.age}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.age && formik.touched.age ? (
          <label htmlFor="age" className="form-error">
            {formik.errors.age}
          </label>
        ) : null}
      </div>
      <div className="pb-3">
        <textarea
          className="form-control"
          type="text"
          placeholder="Adress"
          name="adress"
          value={formik.values.adress}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.adress && formik.touched.adress ? (
          <label htmlFor="adress" className="form-error">
            {formik.errors.adress}
          </label>
        ) : null}
      </div>
      <div className="pb-3">
        <input
          className="form-control"
          type="text"
          placeholder="Phone number"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber ? (
          <label htmlFor="phoneNumber" className="form-error">
            {formik.errors.phoneNumber}
          </label>
        ) : null}
      </div>
      <label>You have {cartItems.reduce((total, item) => total + +item.amount, 0)} items in your cart</label>
      <label>
        Total:{" "}
        <span className="fs-5">{cartItems.reduce((total, item) => total + +item.price * item.amount, 0)} UAH</span>
      </label>
      <button className="btn btn-primary w-100 mt-2" type="submit">
        Checkout
      </button>
    </form>
  );
}
