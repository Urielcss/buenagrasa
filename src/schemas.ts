import { z } from "zod"

const SneakerDataSchema = z.object({
    id: z.number(),
    name: z.string(),
    model: z.string(),
    price: z.number(),
    description: z.string(),
    sizes: z.array(z.string()),
    colors: z.array(z.string()),
    category: z.string(),
    brand: z.string(),
    gender: z.string(),
    image: z.string(),
    imagesByColor: z.record(z.string(), z.string().optional()).optional(), // Nuevo campo para cambiar los colores de imagen
})

const SneakersDataSchema = z.array(SneakerDataSchema)

export type Sneaker = z.infer<typeof SneakerDataSchema>
export type Sneakers = z.infer<typeof SneakersDataSchema>