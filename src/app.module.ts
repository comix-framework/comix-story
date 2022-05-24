import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ApolloModule } from '@apollo/apollo.module'
import { DatabaseModule } from '@database/database.module'
import { ConfigModule } from '@nestjs/config'
import { AuthModule } from '@comico/auth'
import { StoriesModule } from './stories/stories.module';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule, ApolloModule, AuthModule, StoriesModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
