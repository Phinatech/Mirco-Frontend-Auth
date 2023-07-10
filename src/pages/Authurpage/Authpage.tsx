// import React from 'react'
import  {useRecoilValue} from "recoil"

import { CreateUser } from "../../Global/RecoilManagement";
const Authpage = () => {
const user = useRecoilValue(CreateUser)
// console.log(user)

  return <div>
    just a page
    {user.email}
  </div>;
};

export default Authpage;
