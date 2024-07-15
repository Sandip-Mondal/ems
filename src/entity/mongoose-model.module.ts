import { MongooseModule } from "@nestjs/mongoose";
import { ADMIN_MODEL, adminschema } from "./admin.entity";
import { CLIENT_MODEL, clientSchema } from "./client.entity";
import { EMPLOYEE_MODEL, employeeShema } from "./employee.entity";
import { USER_MODEL, userschema } from "./user.entity";
import { Global, Module } from "@nestjs/common";
import { GROUP_MODEL, groupSchema } from "./group.entity";
import { PROJECT_MODEL, projectSchema } from "./project.entity";



const MODELS = [
    // For creating 
    {
        name: USER_MODEL, schema: userschema,
        discriminators: [
            { name: EMPLOYEE_MODEL, schema: employeeShema },
            { name: ADMIN_MODEL, schema: adminschema },
        ]
    },



    { name: CLIENT_MODEL, schema: clientSchema },
    { name: GROUP_MODEL, schema: groupSchema },
    { name: PROJECT_MODEL, schema: projectSchema },

    /*{ name: EMPLOYEE_ATTENDANCE_MODEL, schema: employeeAttendanceSchema },

    // For salary
    { name: EMPLOYEE_SALARY_MODEL, schema: employeeSalarySchema },
    
    // For handelling Task
    { name: TASKMASTER_MODEL, schema: TaskmasterSchema },
    { name: EMPLOYEEDAILYTASK_MODEL, schema: EmployeeDailyTaskSchema },

    // For leave
    { name: LEAVEAPPLICATION_MODEL, schema: leaveApplicationSchema }*/
]

@Global()
@Module({
    imports: [MongooseModule.forFeature(MODELS)],
    exports: [MongooseModule]
})

export class MongooseModelModule { }