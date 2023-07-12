import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { NotFound } from '../pages/notFound';
import { Login } from '../pages/login';
import { Registration } from '../pages/signup';
import { CourseUnauth } from '../pages/course-unauth';
import { WorkoutVideoPage } from '../pages/workoutVideoPage' 
import { Account } from '../pages/account'



export const AppRoutes = () => {
  
    return (
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/course/:id" element={<CourseUnauth />} />
        <Route path="/account" element={<Account />} />
        <Route path="/workoutVideoPage" element={<WorkoutVideoPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
};
