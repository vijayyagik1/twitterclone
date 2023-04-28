// // // import logo from './logo.svg';
// // import "./App.css";

// // import Login from "./components/Login";
// // // import Home from "./components/Home";
// // function App() {
// //   return (
// //     <div className="App">
// //       <Login />
// //       {/* <Home /> */}
// //     </div>
// //   );
// // }

// // export default App;




// import { makeStyles } from "@material-ui/core/styles";
// import { Typography, Avatar, IconButton } from "@material-ui/core";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexDirection: "column",
//     padding: theme.spacing(2),
//     backgroundColor: theme.palette.background.paper,
//     borderRadius: theme.shape.borderRadius,
//     boxShadow: theme.shadows[2],
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "space-between",
//     marginBottom: theme.spacing(2),
//   },
//   title: {
//     fontWeight: theme.typography.fontWeightBold,
//   },
//   accountList: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   accountItem: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(1),
//   },
//   accountName: {
//     fontWeight: theme.typography.fontWeightBold,
//     marginLeft: theme.spacing(2),
//   },
// }));

// const recommendedAccounts = [
//   {
//     name: "Barack Obama",
//     username: "BarackObama",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/822547732376207360/5g0FC8XX_400x400.jpg",
//   },
//   {
//     name: "Elon Musk",
//     username: "elonmusk",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1374047876843423235/9-5Ay5zZ_400x400.jpg",
//   },
//   {
//     name: "Kamala Harris",
//     username: "KamalaHarris",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1347442190553701377/02VqGk5f_400x400.jpg",
//   },
// ];

// function TwitterWhoToFollow() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <div className={classes.header}>
//         <Typography variant="h6" className={classes.title}>
//           Who to follow
//         </Typography>
//         <IconButton>
//           <FontAwesomeIcon icon={faCheckCircle} />
//         </IconButton>
//       </div>
//       <div className={classes.accountList}>
//         {recommendedAccounts.map((account) => (
//           <div key={account.username} className={classes.accountItem}>
//             <Avatar src={account.avatarUrl} alt={account.name} />
//             <Typography variant="subtitle1" className={classes.accountName}>
//               {account.name}
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="span">
//               @{account.username}
//             </Typography>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default TwitterWhoToFollow;


// import React from "react";
// import { FaUserPlus } from "react-icons/fa";

// const users = [
//   {
//     id: 1,
//     name: "John Doe",
//     avatar: "https://randomuser.me/api/portraits/men/1.jpg",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     avatar: "https://randomuser.me/api/portraits/women/2.jpg",
//   },
//   {
//     id: 3,
//     name: "Bob Johnson",
//     avatar: "https://randomuser.me/api/portraits/men/3.jpg",
//   },
// ];

// const WhoToFollow = () => {
//   return (
//     <div>
//       <h2>Who to Follow</h2>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>
//             <img src={user.avatar} alt={user.name} />
//             <div>
//               <span>{user.name}</span>
//               <button>
//                 <FaUserPlus /> Follow
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default WhoToFollow;
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import Login from "./components/Login";
 import Home from "./components/Home";

const allUsers = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    isFollowing: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    isFollowing: false,
  },
  {
    id: 3,
    name: "Bob Johnson",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    isFollowing: false,
  },
  // ... and more users
];

const WhoToFollow = () => {
  const [showMore, setShowMore] = useState(false);
  const users = showMore ? allUsers : allUsers.slice(0, 3);

  const handleFollow = (userId) => {
    // Implement your follow logic here
    console.log(`Follow user ${userId}`);
  };

  return (
    <div>
      <Login />
      <Home />

      <div>
        <h2>Who to Follow</h2>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <img src={user.avatar} alt={user.name} />
              <div>
                <span>{user.name}</span>
                {!user.isFollowing && (
                  <button onClick={() => handleFollow(user.id)}>
                    <FaUserPlus /> Follow
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
        {!showMore && (
          <button onClick={() => setShowMore(true)}>Show More</button>
        )}
      </div>
    </div>
  );
};

export default WhoToFollow;

// // // import logo from './logo.svg';
// // import "./App.css";

// // import Login from "./components/Login";
// // // import Home from "./components/Home";
// // function App() {
// //   return (
// //     <div className="App">
// //       <Login />
// //       {/* <Home /> */}
// //     </div>
// //   );
// // }

// // export default App;