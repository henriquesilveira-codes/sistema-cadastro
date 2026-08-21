import { Injectable } from '@nestjs/common';
import { CreateAlunoDto } from './dto/create-aluno.dto';
import { UpdateAlunoDto } from './dto/update-aluno.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AlunosService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createAlunoDto: CreateAlunoDto) {
    return this.prisma.aluno.create({
      data: createAlunoDto,
    });
  }

  async findAll() {
    return this.prisma.aluno.findMany();
  }

  async findOne(id: number) {
    return this.prisma.aluno.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateAlunoDto: UpdateAlunoDto) {
    return this.prisma.aluno.update({
      where: { id },
      data: updateAlunoDto,
    });
  }

  async remove(id: number) {
    return this.prisma.aluno.delete({
      where: { id },
    });
  }
}
