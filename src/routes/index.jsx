import { Routes, Route } from 'react-router-dom'
import { MainPage } from '../pages/main'
import { NotFound } from '../pages/notFound'
import { Login } from '../pages/login'
import { Registration } from '../pages/signup'
import { CourseUnauth } from '../pages/course-unauth'
import { WorkoutVideoPage } from '../pages/workoutVideoPage'
import { Account } from '../pages/account'
import { ProtectedRoute } from '../protected-route/index'
import { Loginсhange } from '../pages/newlogin'
import { Pasсhange } from '../pages/newpas'

export const AppRoutes = () => {
  const token = localStorage.getItem('token')
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/course/:id' element={<CourseUnauth />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/login' element={<Login />} />
      <Route path='/registration' element={<Registration />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
        <Route path='/account' element={<Account />} />
        <Route path='/newlogin' element={<Loginсhange />} />
        <Route path='/newpas' element={<Pasсhange />} />
        <Route path='/account/:workoutid' element={<WorkoutVideoPage />} />
      </Route>
    </Routes>
  )
}
