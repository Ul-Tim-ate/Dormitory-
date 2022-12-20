import { AxiosResponse } from "axios";
import $api from "../http";
import {
  StudentProfileResponse,
  StudentsResponse,
} from "../models/response/students-response";
import { IStudent } from "../models/student";

export default class StudentsService {
  static async getDormitoryStudents(
    id: number
  ): Promise<AxiosResponse<StudentsResponse>> {
    return $api.get<StudentsResponse>(`/dormitory/${id}/students`);
  }

  static async getStudentProfile(
    dormitoryId: number,
    studentId: number
  ): Promise<AxiosResponse<StudentsResponse>> {
    return $api.get<StudentsResponse>(
      `/dormitory/${dormitoryId}/students/${studentId}`
    );
  }

  static async changeStudentProfile(
    dormitoryId: number,
    student: IStudent
  ): Promise<AxiosResponse<StudentsResponse>> {
    return $api.put<StudentsResponse>(
      `/dormitory/${dormitoryId}/students/${student.id}`,
      { ...student }
    );
  }

  static async deleteStudentProfile(
    dormitoryId: number,
    studentId: number
  ): Promise<AxiosResponse<StudentProfileResponse>> {
    return $api.delete<StudentProfileResponse>(
      `/dormitory/${dormitoryId}/students/${studentId}`
    );
  }
}
