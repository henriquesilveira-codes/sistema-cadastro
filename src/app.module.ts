import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AlunosModule } from './alunos/alunos.module';
import { CursosModule } from './cursos/cursos.module';
import { MatriculasModule } from './matriculas/matriculas.module';

@Module({
  imports: [PrismaModule, AlunosModule, CursosModule, MatriculasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
