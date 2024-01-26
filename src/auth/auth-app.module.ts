import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongo:1fdfhgFAHe6B24EBf5GBBg3fA56aHB1G@roundhouse.proxy.rlwy.net:39285',
    ),
    AuthModule,
  ],
})
export class AuthAppModule {}
