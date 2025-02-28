
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'todo',
    protoPath: join(__dirname, './todo/interfaces/todo.proto'),
    url: process.env.GRPC_URL || 'localhost:50051',
    loader: {
      keepCase: true,
      longs: String,
      enums: String,
      defaults: true,
      oneofs: true,
    },
    channelOptions: {
      'grpc.dns_family_resolver': 4, // Force IPv4
    }
  },
};