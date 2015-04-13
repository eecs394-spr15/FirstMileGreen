# Read more about app structure at http://docs.appgyver.com

module.exports =

  # See styling options for tabs and other native components in app/common/native-styles/ios.css or app/common/native-styles/android.css
  tabs: [
    {
      title: "Create Pickup Game"
      id: "create"
      location: "common#create-pickup" # Supersonic module#view type navigation
    }
    {
      title: "View Pickup Games"
      id: "view"
      location: "common#view-games"
    }
  
  ]

  # rootView:
  #   location: "example#view-games"

  preloads: [
    {
      id: "learn-more"
      location: "common#learn-more"
    }
    {
      id: "using-the-scanner"
      location: "common#using-the-scanner"
    }
  ]

  # drawers:
  #   left:
  #     id: "leftDrawer"
  #     location: "common#drawer"
  #     showOnAppLoad: false
  #   options:
  #     animation: "swingingDoor"
  #
  # initialView:
  #   id: "initialView"
  #   location: "common#initial-view"
