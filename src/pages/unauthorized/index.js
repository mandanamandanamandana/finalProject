import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../components/Layout';

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <Layout title="Unauthorized Page">
      <h1 className="text-xl font-semibold text-[#407a3d] tracking-wide">
        Access Denied
      </h1>
      {message && (
        <div className="mb-4 text-[white] capitalize tracking-wide">
          {message}
        </div>
      )}
    </Layout>
  );
}
