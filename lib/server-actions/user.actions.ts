'use server'

import User from '../../models/user.model'
import Event from '../../models/event.model'
import Order from '../../models/order.model'
import { handleError } from '../utils'
import { connectToDatabase } from '../db'
import { CreateUserParams, UpdateUserParams } from '@/types'
import { revalidatePath } from 'next/cache'

export const createUser = async (user: CreateUserParams) => {
  try {
    await connectToDatabase()

    const newUser = await User.create(user)

    return JSON.parse(JSON.stringify(newUser))
  } catch (error) {
    handleError(error)
  }
}

export async function getUserById(userId: string) {
  try {
    await connectToDatabase()

    const user = await User.findById(userId)

    if (!user) throw new Error('User not found')
    return JSON.parse(JSON.stringify(user))
  } catch (error) {
    handleError(error)
  }
}

export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
  try {
    await connectToDatabase()

    const updatedUser = await User.findByIdAndUpdate({ clerkId }, user, {
      new: true,
    })

    if (!updatedUser) {
      throw new Error('User not found')
    }

    return JSON.parse(JSON.stringify(updatedUser))
  } catch (error) {
    handleError(error)
  }
}

export const deleteUser = async (clerkId: string) => {
  try {
    await connectToDatabase()

    const userToDelete = await User.findOne({ clerkId })

    if (!userToDelete) {
      throw new Error('User not found')
    }

    await Promise.all([
      Event.updateMany(
        { _id: { $in: userToDelete.events } },
        { $pull: { organizer: userToDelete._id } },
      ),

      Order.updateMany(
        { _id: { $in: userToDelete.orders } },
        { $unset: { buyer: 1 } },
      ),
    ])

    const deletedUser = await User.findByIdAndDelete(userToDelete._id)
    revalidatePath('/')

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
  } catch (error) {
    handleError(error)
  }
}
