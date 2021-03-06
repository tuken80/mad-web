import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from "@angular/material/expansion";
import {ArticleService} from "../services/article.service";
import {Article} from "../../models/article";

@Component({
    selector: 'app-blog-list',
    template: `
        <mat-accordion class="example-headers-align" multi>
            <mat-expansion-panel>
                <mat-expansion-panel-header>
                    <mat-panel-title>
                        Personal data
                    </mat-panel-title>
                    <mat-panel-description>
                        Type your name and age
                        <mat-icon>account_circle</mat-icon>
                    </mat-panel-description>
                </mat-expansion-panel-header>

                <mat-form-field>
                    <mat-label>First name</mat-label>
                    <input matInput>
                </mat-form-field>

                <mat-form-field>
                    <mat-label>Age</mat-label>
                    <input matInput type="number" min="1">
                </mat-form-field>

            </mat-expansion-panel>
            <mat-expansion-panel disabled>
                <mat-expansion-panel-header>
                    <mat-panel-title>
                        Destination
                    </mat-panel-title>
                    <mat-panel-description>
                        Type the country name
                        <mat-icon>map</mat-icon>
                    </mat-panel-description>
                </mat-expansion-panel-header>

                <mat-form-field>
                    <mat-label>Country</mat-label>
                    <input matInput>
                </mat-form-field>
            </mat-expansion-panel>

            <mat-expansion-panel>
                <mat-expansion-panel-header>
                    <mat-panel-title>
                        Day of the trip
                    </mat-panel-title>
                    <mat-panel-description>
                        Inform the date you wish to travel
                        <mat-icon>date_range</mat-icon>
                    </mat-panel-description>
                </mat-expansion-panel-header>
            </mat-expansion-panel>
        </mat-accordion>
    `,
    styles: [
        "mat-accordion { margin: 50px; }"
    ]
})
export class BlogListComponent implements OnInit {
    @ViewChild(MatAccordion) accordion: MatAccordion | undefined;
    articles: Article[] = [];

    constructor(private arts: ArticleService) {}


    ngOnInit(): void {
        this.arts.gets().subscribe((articles: Article[]) => this.articles = articles);
    }
}
