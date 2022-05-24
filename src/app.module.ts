import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApolloModule } from '@apollo/apollo.module'
import { DatabaseModule } from '@database/database.module'
import { VersionModule } from './version/version.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ApolloModule,
    VersionModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
