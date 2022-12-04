import { Routes, Route } from 'react-router-dom'
import { BaseLayout } from './layouts/Base/index.js'
import { Home } from './pages/Home'
import { Post } from './pages/Post/index.js'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Route>
    </Routes>
  )
}
