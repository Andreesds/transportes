import { Module } from '@nestjs/common';
import { TransportesService } from './transportes.service';
import { TransportesController } from './transportes.controller';
import { transporteProviders } from './transportes.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TransportesController],
  providers: [...transporteProviders, TransportesService],
})
export class TransportesModule {}
