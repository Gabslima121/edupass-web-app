import api from '../../services/api'

class CoursesService {
  async getAllCourses() {
    const { data } = await api.get('/cursos-edu');

    return data.cursos;
  }

}
export default CoursesService