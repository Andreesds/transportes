import { Response, Request } from 'express';
export function successResponse(
  request: Request,
  response: Response,
  status: number,
  totalRegistros: number,
  countRegistros: number,
  message: string,
  retorno: any,
) {
  message = message || '';
  let statusCode = status || 200;
  let respuesta = {
    ok: true,
    codRetorno: '0001',
    totalRegistros,
    countRegistros,
    message,
    retorno,
  };
  return response.status(statusCode).json(respuesta);
}
export function errorResponse(
  request: Request,
  response: Response,
  codError: string,
  status: number,
  message: string,
  retorno: any,
) {
  message = message || 'Internal server error';
  let statusCode = status || 500;
  let respuesta = {
    ok: false,
    codRetorno: codError,
    message,
    retorno,
  };
  return response.status(statusCode).json(respuesta);
}
