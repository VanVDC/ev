import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    const createdUser = await User.insertMany(users)

    const adminUser = createdUser[0]._id

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser }
    })

    await Product.insertMany(sampleProducts)

    console.log('data imported!')
    process.exit()
  } catch (err) {
    console.error(`${err}`)
    process.exit(1)
  }
}

const destroyedData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('data destroyed!')
    process.exit()
  } catch (err) {
    console.error(`${err}`)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyedData()
} else {
  importData()
}
