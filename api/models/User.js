import mongoose from 'mongoose'
/**
Los datos necesario para registrar a un cliente, son:
  - Nombre
  - Apellidos
  - Teléfono
  - Correo
  - Contraseña
  - No. de tarjeta
  - Dirección de envío
 */
const userSchema = new mongoose.Schema({
  dni: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String
  },
  phone: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  birthDate: {
    type: Date
  },
  role: {
    type: String,
    enum: ['admin', 'customer'],
    defaut: 'customer',
    require: true
  },
  cardNumber: {
    type: String,
    required: true
  },  
  shippingAddress: {
    type: String,
    required: true
  }
})

export default mongoose.model('User', userSchema)