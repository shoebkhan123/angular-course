import { AfterViewInit, Component, ContentChild, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterViewInit {
  @Input({
    required: true
  })
  course: Course;
  @Input() index: number;

  @Output('courseSelected')
  courseSelectedEvent = new EventEmitter<Course>();

  // @ContentChild('imgcontent')
  // img;


  @ContentChild(CourseImageComponent)
  img: CourseImageComponent;

  ngAfterViewInit(): void {
    console.log(this.img)
  }

  onCourseViewed() {
    console.log('Hello from course card')
    this.courseSelectedEvent.emit(this.course)
  }

  cardClasses() {
    if(this.course.category == 'BEGINNER') {
      return 'beginner';
    }
  }

  cardStyle() {
    return {'text-decoration': 'underline'}
  }

}
