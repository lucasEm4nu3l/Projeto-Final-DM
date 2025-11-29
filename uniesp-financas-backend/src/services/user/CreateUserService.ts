import { hash } from "bcryptjs";
import prismaClient from "../../prisma";

interface UserRequest{
  name: string;
  email: string;
  password: string;
  balance?: number;
}

class CreateUserService{
  async execute({name, email, password, balance = 0}: UserRequest){
    if (!email || email.trim() === '') {
      throw new Error("Email is required");
    }

    if (!name || name.trim() === '') {
      throw new Error("Name is required");
    }

    if (!password || password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error("Invalid email format");
    }

    const userAlreadyExists = await prismaClient.user.findFirst({
      where:{
        email: email.toLowerCase(),
      }
    })


    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    
    const passwordHash = await hash(password, 8);

    const user = await prismaClient.user.create({
      data:{
        name: name.trim(),
        email: email.toLowerCase(),
        password: passwordHash,
        balance,
      },
      select:{
        id: true,
        name: true,
        email: true,
        balance: true,
        created_at: true,
        updated_at: true,
      }
    })

    return user;

  }
}

export { CreateUserService }