export default function Page() {
  return (
    <div className='py-12 max-w-prose flex flex-col gap-4'>
      <p>
        Here&apos;s a great piece of writing that I imagine is shared around
        often. I come across it every now and again and think of it in between
        times, but never in enough detail to recall the specifics.
      </p>
      <p>
        I don&apos;t know much about Gary Provost but I like this little bit of
        writing. Maybe I won&apos;t lose it so easily now.
      </p>
      <blockquote className='pl-4 border-l-4 flex flex-col gap-4'>
        <p>
          This sentence has five words. Here are five more words. Five-word
          sentences are fine. But several together become monotonous. Listen to
          what is happening. This writing is getting boring. The sound of it
          drones. It&apos;s like struck record. The ear demands some variety.
        </p>
        <p>
          Now listen. I vary the sentence length, and I create music. Music. The
          writing sings. It has a pleasant rhythm, a lilt, a harmony. I use
          short sentences. And I use the sentences of medium length. And
          sometimes when I am certain the reader is rested, I will engage them
          with a sentence of considerable length, a sentence that burns with
          energy and builds with all the impetus of a crescendo, the roll of
          drums, the crash of the cymbals–sounds that says listen to this, it is
          important.
        </p>
        <p>
          So write with a combination of short, medium, and long sentences.
          Create a sound that pleases the reader&apos;s ear. Don&apos;t just
          write words. Write music.
        </p>
        <span className='text-sm text-foreground/80'>
          &mdash;Write music by Gary Provost
        </span>
      </blockquote>
    </div>
  );
}
