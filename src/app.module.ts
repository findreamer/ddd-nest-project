import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared';
import { TenantModule } from './modules/tenant/tenant.module';
import { OrgModule } from './modules/org/org.module';
import { OrgTypeModule } from './modules/org-type/org-type.module';
import { EmpModule } from './modules/emp/emp.module';
import { PostModule } from './modules/post/post.module';
import { EmpPostModule } from './modules/emp_post/emp_post.module';
import { ClientModule } from './modules/client/client.module';
import { ContractModule } from './modules/contract/contract.module';
import { ProjectModule } from './modules/project/project.module';

@Module({
  imports: [
    SharedModule,
    TenantModule,
    OrgModule,
    OrgTypeModule,
    EmpModule,
    PostModule,
    EmpPostModule,
    ClientModule,
    ContractModule,
    ProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
