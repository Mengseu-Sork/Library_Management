import { Member } from "./Member";
import { Booking } from "./Booking";
export class Review {
    private reviewID: string;
    private booking: Booking;
    private member: Member;
    private comment: string;
    private rating: number;
    private reviewDate: Date;

    /**
     * Constructs a new Review instance.
     * @param reviewID A unique identifier for this review.
     * @param booking The Booking object this review is related to.
     * @param member The Member object who wrote this review.
     * @param comment The textual content of the review.
     * @param rating The rating given in the review (e.g., 1-5).
     */
    constructor(reviewID: string, booking: Booking, member: Member, comment: string, rating: number) {
        this.reviewID = reviewID;
        this.booking = booking;
        this.member = member;
        this.comment = comment;
        this.rating = rating;
        this.reviewDate = new Date();
    }

    /**
     * Gets the unique ID of the review.
     * @returns The review's ID.
     */
    public getReviewID(): string {
        return this.reviewID;
    }

    /**
     * Gets the Booking object this review is for.
     * @returns The Booking object.
     */
    public getBooking(): Booking {
        return this.booking;
    }

    /**
     * Gets the Member object who wrote this review.
     * @returns The Member object.
     */
    public getMember(): Member {
        return this.member;
    }

    /**
     * Gets the comment text of the review.
     * @returns The review comment.
     */
    public getComment(): string {
        return this.comment;
    }

    /**
     * Gets the rating given in the review.
     * @returns The rating number.
     */
    public getRating(): number {
        return this.rating;
    }

    /**
     * Gets the date when the review was created or last updated.
     * @returns The review date.
     */
    public getReviewDate(): Date {
        return this.reviewDate;
    }

    /**
     * Updates the comment and rating of the review.
     * The reviewDate is also updated to the current date/time.
     * This method is retained for practical functionality, though not explicitly in the diagram's Review box.
     * @param newComment The new textual content for the review.
     * @param newRating The new rating for the review.
     */
    public updateReview(newComment: string, newRating: number): void {
        this.comment = newComment;
        this.rating = newRating;
        this.reviewDate = new Date();
        console.log(`Review ${this.reviewID} for booking ${this.booking.bookingID} updated.`);
    }
}
