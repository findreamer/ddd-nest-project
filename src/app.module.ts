import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared';
import { TenantModule } from './modules/tenant/tenant.module';
import { OrgModule } from './modules/org/org.module';
import { OrgTypeModule } from './modules/org-type/org-type.module';

@Module({
  imports: [SharedModule, TenantModule, OrgModule, OrgTypeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
