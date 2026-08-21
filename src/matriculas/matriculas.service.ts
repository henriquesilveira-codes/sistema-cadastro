import { 
  Injectable, 
  NotFoundException, 
  BadRequestException 
} from '@nestjs/common';
import { CreateMatriculaDto } from './dto/create-matricula.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatriculasService {
  constructor(private readonly prisma: PrismaService) {}

  async matricular(createMatriculaDto: CreateMatriculaDto) {
    const { aluno_id, curso_id } = createMatriculaDto;

    const aluno = await this.prisma.aluno.findUnique({
      where: { id: aluno_id },
    });
    
    if (!aluno) {
      throw new NotFoundException(`Aluno com ID ${aluno_id} não encontrado.`);
    }

    const curso = await this.prisma.curso.findUnique({
      where: { id: curso_id },
    });
    
    if (!curso) {
      throw new NotFoundException(`Curso com ID ${curso_id} não encontrado.`);
    }

    const matriculaExistente = await this.prisma.matricula.findFirst({
      where: {
        aluno_id: aluno_id,
        curso_id: curso_id,
      },
    });

    if (matriculaExistente) {
      throw new BadRequestException('O aluno já está matriculado neste curso.');
    }

    return this.prisma.matricula.create({
      data: {
        aluno_id,
        curso_id,
      },
    });
  }

  async listarCursosDoAluno(aluno_id: number) {
    return this.prisma.matricula.findMany({
      where: { aluno_id },
      include: { curso: true },
    });
  }

  async listarAlunosDoCurso(curso_id: number) {
    return this.prisma.matricula.findMany({
      where: { curso_id },
      include: { aluno: true },
    });
  }
}
