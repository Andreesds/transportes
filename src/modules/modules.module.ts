import { Module } from '@nestjs/common';
import { TransportesModule } from './transportes/transportes.module';
import { PersonasModule } from './personas/personas.module';
import { ConductoresModule } from './conductores/conductores.module';
import { DetallesEntregasModule } from './detalles-entregas/detalles-entregas.module';

@Module({
  imports: [
    TransportesModule,
    PersonasModule,
    ConductoresModule,
    DetallesEntregasModule,
  ],
  providers: [],
  exports: [],
})
export class ModulesModule {}
