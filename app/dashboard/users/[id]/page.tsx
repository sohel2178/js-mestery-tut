const UserDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <h2>User Detail Page of {id}</h2>;
};

export default UserDetailPage;
//ashim.sen33@gmail.com
