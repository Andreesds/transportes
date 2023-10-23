import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateTransporteDto } from './dto/create-transporte.dto';
import { UpdateTransporteDto } from './dto/update-transporte.dto';
import { Vehicle } from './entities/transporte.entity';
import { Repository } from 'typeorm';
import { ErrorMessage } from 'src/configuration/error-messages';
import { FindTransporteDto } from './dto/find-transporte.dto';

@Injectable()
export class TransportesService {
  constructor(
    @Inject('TRANSPORTE_REPOSITORY')
    private transporteRepository: Repository<Vehicle>,
  ) {}

  async create(createTransporteDto: CreateTransporteDto) {
    try {
      const objTransporteDto =
        await this.transporteRepository.create(createTransporteDto);
      const resp = await this.transporteRepository.save(objTransporteDto);
      return resp;
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message || ErrorMessage.ERROR_SERVICE.message,
          codRetorno:
            error.response.codRetorno || ErrorMessage.ERROR_SERVICE.codRetorno,
        },
        error.status || ErrorMessage.ERROR_SERVICE.status,
        {
          cause: new Error(error.options.cause || error),
          description: error.options.description || error.message,
        },
      );
    }
  }

  async findAll(findTransporteDto: FindTransporteDto): Promise<Vehicle[]> {
    try {
      const resp = await this.transporteRepository.findBy(findTransporteDto);
      return resp;
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message || ErrorMessage.ERROR_SERVICE.message,
          codRetorno:
            error.response.codRetorno || ErrorMessage.ERROR_SERVICE.codRetorno,
        },
        error.status || ErrorMessage.ERROR_SERVICE.status,
        {
          cause: new Error(error.options.cause || error),
          description: error.options.description || error.message,
        },
      );
    }
  }

  async findOne(findTransporteDto: FindTransporteDto) {
    try {
      const resp = await this.transporteRepository.findOneBy(findTransporteDto);
      return resp;
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message || ErrorMessage.ERROR_SERVICE.message,
          codRetorno:
            error.response.codRetorno || ErrorMessage.ERROR_SERVICE.codRetorno,
        },
        error.status || ErrorMessage.ERROR_SERVICE.status,
        {
          cause: new Error(error.options.cause || error),
          description: error.options.description || error.message,
        },
      );
    }
  }

  async update(id: number, updateTransporteDto: UpdateTransporteDto) {
    try {
      const resp = await this.transporteRepository.update(
        id,
        updateTransporteDto,
      );
      return resp;
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message || ErrorMessage.ERROR_SERVICE.message,
          codRetorno:
            error.response.codRetorno || ErrorMessage.ERROR_SERVICE.codRetorno,
        },
        error.status || ErrorMessage.ERROR_SERVICE.status,
        {
          cause: new Error(error.options.cause || error),
          description: error.options.description || error.message,
        },
      );
    }
  }

  async remove(id: number, updateTransporteDto: UpdateTransporteDto) {
    try {
      const respUpdate = await this.transporteRepository.update(
        id,
        updateTransporteDto,
      );

      const resp = await this.transporteRepository.softDelete(id);

      return resp;
    } catch (error) {
      throw new HttpException(
        {
          message: error.response.message || ErrorMessage.ERROR_SERVICE.message,
          codRetorno:
            error.response.codRetorno || ErrorMessage.ERROR_SERVICE.codRetorno,
        },
        error.status || ErrorMessage.ERROR_SERVICE.status,
        {
          cause: new Error(error.options.cause || error),
          description: error.options.description || error.message,
        },
      );
    }
  }
}
