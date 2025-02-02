import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeModule } from './modules/eployee.module';

@Module({
  imports: [CqrsModule.forRoot(), EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
