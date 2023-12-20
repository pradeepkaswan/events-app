'use server'

import { revalidatePath } from 'next/cache'
import { connectToDatabase } from '../db'
import { CreateEventParams } from '@/types'
import User from '@/models/user.model'
import Event from '@/models/event.model'
import Category from '@/models/category.model'
import { handleError } from '../utils'

export const createEvent = async ({
  event,
  userId,
  path,
}: CreateEventParams) => {
  try {
  } catch (error) {}
}

export const getEventById = async (eventId: string) => {
  try {
  } catch (error) {}
}
