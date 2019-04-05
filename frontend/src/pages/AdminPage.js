import React from 'react';
import Login from 'components/admin/Login';
import PageTemplate from 'components/common/PageTemplate';
import AdminContainer from 'containers/admin/AdminContainer';
import { Helmet } from 'react-helmet';

const AdminPage = () => {
  return (
    <>
      <Helmet>
        <title>어드민 페이지 | 대대숲</title>
      </Helmet>
      <PageTemplate>
        {localStorage.getItem('token') ? <AdminContainer /> : <Login />}
      </PageTemplate>
    </>
  );
};

export default AdminPage;
