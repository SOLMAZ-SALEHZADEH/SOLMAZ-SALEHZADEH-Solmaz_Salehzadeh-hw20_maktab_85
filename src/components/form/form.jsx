import React, { useState } from "react";
import Label from "../label/label";
import Input from "../input/input";
import styles from "./form.module.css";
import {useDispatch,useSelector} from "react-redux"
import { addToForm } from "../../redux/features/formSlice";
function Form() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    coorperation: "",
    phoneNumber: "",
    resume: "",
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => 
    state.form.formItems
)
console.log(cartItems)
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formInfo.name.length < 4) {
      setError(true);
      return;
    }
    if (
      !formInfo.name.match(/^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/)
    ) {
      setError(true);
      return;
    }
    if (!formInfo.email.includes("@")) {
      setError(true);
      return;
    }
    if (formInfo.coorperation.length === 0) {
      setError(true);
      return;
    }
    if (
      formInfo.phoneNumber.length < 12 ||
      formInfo.phoneNumber[0] !== 0 ||
      formInfo.phoneNumber[1] !== 9
    ) {
      setError(true);
      return;
    }
    if (formInfo.resume.length === 0) {
      setError(true);
      return;
    }
    console.log(formInfo)
    dispatch(addToForm(formInfo))
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={styles["form__container"]}>
        <div>
          <Label label="نام" requierd="true" />
          <input
            type="text"
            onChange={(e) => {
              setError(false);
              setFormInfo((prevState) => ({
                ...prevState,
                name: e.target.value,
              }));
            }}
            value={formInfo.name}
          />
          {error &&
            (formInfo.name.length < 4 ||
              !formInfo.name.match(
                /^[a-zA-Z]+ [a-zA-Z]+$/ && /^[\u0600-\u06FF\s]+$/
              )) && (
              <p className={styles["form__text-color"]}>
                نام وارد شده معتبر نیست
              </p>
            )}
        </div>
        <div>
          <Label label="ایمیل" requierd="true" />
          <input
            type="email"
            onChange={(e) => {
              setError(false);
              setFormInfo((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
            value={formInfo.email}
          />

          {error && !formInfo.email.includes("@") && (
            <p className={styles["form__text-color"]}>
              ایمیل وارد شده نامعتبر است
            </p>
          )}
        </div>
        <div>
          <Label label="موقعیت همکاری" requierd="true" />
          <input
            type="text"
            onChange={(e) => {
              setError(false);
              setFormInfo((prevState) => ({
                ...prevState,
                coorperation: e.target.value,
              }));
            }}
            value={formInfo.coorperation}
          />
          {error && formInfo.coorperation.length === 0 && (
            <p className={styles["form__text-color"]}>
              موقعیت همکاری وارد شده نامعتبر است
            </p>
          )}
        </div>
        <div>
          <Label label="شماره تماس" requierd="true" />
          <input
            value={formInfo.phoneNumber}
            onChange={(e) => {
              setError(false);
              setFormInfo((prevState) => ({
                ...prevState,
                phoneNumber: e.target.value,
              }));
            }}
          />
          {error &&
            (formInfo.phoneNumber.length !== 11 ||
              Number(formInfo.phoneNumber[0]) !== 0 ||
              Number(formInfo.phoneNumber[1]) !== 9) && (
              <p className={styles["form__text-color"]}>
                شماره تماس وارد شده نامعتبر است
              </p>
            )}
        </div>
        <div>
          <Label label="(pdf ,jpg,png)فایل رزومه " requierd="true" />
          <input
            onChange={(e) => {
              setError(false);
              setFormInfo((prevState) => ({
                ...prevState,
                resume: "e.target.files[0]"
              }))
            }}
            type="file"
            accept="image/*"
          />
          {error && formInfo.resume.length === 0 && (
            <p className={styles["form__text-color"]}>
              فایل رزومه وارد شده نامعتبر است
            </p>
          )}
        </div>
      </div>
      <button type="submit">ارسال درخواست</button>
    </form>
  );
}

export default Form;
