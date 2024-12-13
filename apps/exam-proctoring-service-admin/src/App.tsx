import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { RoleList } from "./role/RoleList";
import { RoleCreate } from "./role/RoleCreate";
import { RoleEdit } from "./role/RoleEdit";
import { RoleShow } from "./role/RoleShow";
import { ExamList } from "./exam/ExamList";
import { ExamCreate } from "./exam/ExamCreate";
import { ExamEdit } from "./exam/ExamEdit";
import { ExamShow } from "./exam/ExamShow";
import { MonitoringDataList } from "./monitoringData/MonitoringDataList";
import { MonitoringDataCreate } from "./monitoringData/MonitoringDataCreate";
import { MonitoringDataEdit } from "./monitoringData/MonitoringDataEdit";
import { MonitoringDataShow } from "./monitoringData/MonitoringDataShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"ExamProctoringService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Role"
          list={RoleList}
          edit={RoleEdit}
          create={RoleCreate}
          show={RoleShow}
        />
        <Resource
          name="Exam"
          list={ExamList}
          edit={ExamEdit}
          create={ExamCreate}
          show={ExamShow}
        />
        <Resource
          name="MonitoringData"
          list={MonitoringDataList}
          edit={MonitoringDataEdit}
          create={MonitoringDataCreate}
          show={MonitoringDataShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
