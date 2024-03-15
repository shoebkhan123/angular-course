import { AfterContentInit, AfterViewInit, Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  courses = [...COURSES];

  @ViewChild('cardRef')
  card: CourseCardComponent;
  @ViewChild('cardRef', {read: ElementRef})
  card1: ElementRef;
  @ViewChild('cardRef2')
  card2: CourseCardComponent;

  @ViewChild('containerRef')
  containerRef: ElementRef;

  @ViewChildren(CourseCardComponent)
  cards;


  onCourseSelected(course: Course) {
    console.log('hello from App')
    console.log(this.card1)
    console.log(this.card)
    console.log(this.card2)
    console.log(this.containerRef)

  }
  
  ngAfterViewInit(): void {
    // console.log('Container ref: ', this.containerRef)
    console.log('Container ref: ', this.cards.changes)
  }
  
  trackCourse(index: number, course: Course) {
    return course.id
  }


}
