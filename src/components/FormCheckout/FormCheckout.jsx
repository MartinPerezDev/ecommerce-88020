const FormCheckout = ({ dataForm, handleChangeInput, sendOrder }) => {
  return (
    <form onSubmit={sendOrder}>
      <input type="text" name="fullname" value={dataForm.fullname} onChange={handleChangeInput} placeholder="ingrese su nombre" />
      <input type="number" name="phone" value={dataForm.phone} onChange={handleChangeInput} placeholder="ingrese su telefono" />
      <input type="email" name="email" value={dataForm.email} onChange={handleChangeInput} placeholder="ingrese su email" />

      <button type="submit">Enviar Orden</button>
    </form>
  )
}

export default FormCheckout