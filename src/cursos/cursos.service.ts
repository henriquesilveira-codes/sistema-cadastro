import { Injectable } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCursoDto: CreateCursoDto) {
    return this.prisma.curso.create({
      data: createCursoDto,
    });
  }

  async findAll() {
    return this.prisma.curso.findMany();
  }

  async findOne(id: number) {
    return this.prisma.curso.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.prisma.curso.update({
      where: { id },
      data: updateCursoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.curso.delete({
      where: { id },
    });
  }
}
