import { z } from "zod"

export const dailyUpdatesSchema = z.object({
    name:z.string().min(1,"Name is required"),
   userId: z.string().min(1, "User ID is required"),
  update: z.string().min(10, "Update must be at least 10 characters"),
})

export type DailyUpdate = z.infer<typeof dailyUpdatesSchema>