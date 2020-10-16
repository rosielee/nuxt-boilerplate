export default function ({ store, redirect, $storage }) {
  // If the user is not authenticated
  if (!$storage.getUniversal('userSignedIn')) {
    return redirect('/')
  }
}