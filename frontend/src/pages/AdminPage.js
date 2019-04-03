import React from 'react';
import Login from 'components/admin/Login';
import PageTemplate from 'components/common/PageTemplate';
import AdminContainer from 'containers/admin/AdminContainer';

const AdminPage = () => {
  return (
    <PageTemplate>
      {localStorage.getItem('token') ? <AdminContainer /> : <Login />}
    </PageTemplate>
  );
};

export default AdminPage;
