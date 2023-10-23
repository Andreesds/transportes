import { Module } from '@nestjs/common';
import { TransportesModule } from './transportes/transportes.module';
import { PersonasModule } from './personas/personas.module';
import { ConductoresModule } from './conductores/conductores.module';

@Module({
  imports: [TransportesModule, PersonasModule, ConductoresModule],
  providers: [],
  exports: [],
})
export class ModulesModule {}
