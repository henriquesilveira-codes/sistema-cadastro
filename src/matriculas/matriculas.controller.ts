import { Controller, Get, Post, Body, Param, ParseIntPipe } from '@nestjs/common';
import { MatriculasService } from './matriculas.service';
import { CreateMatriculaDto } from './dto/create-matricula.dto';

@Controller('matriculas')
export class MatriculasController {
  constructor(private readonly matriculasService: MatriculasService) {}

  @Post()
  matricular(@Body() createMatriculaDto: CreateMatriculaDto) {
    return this.matriculasService.matricular(createMatriculaDto);
  }

  @Get('aluno/:id')
  listarCursosDoAluno(@Param('id', ParseIntPipe) id: number) {
    return this.matriculasService.listarCursosDoAluno(id);
  }

  @Get('curso/:id')
  listarAlunosDoCurso(@Param('id', ParseIntPipe) id: number) {
    return this.matriculasService.listarAlunosDoCurso(id);
  }
}
